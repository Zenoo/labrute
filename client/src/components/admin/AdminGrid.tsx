import {
  Alert, Box, Button, CircularProgress, Stack,
} from '@mui/material';
import type {
  DataGridProps, GridColDef, GridFilterModel, GridRenderCellParams,
  GridSortModel, GridValidRowModel,
} from '@mui/x-data-grid';
import type { AdminGridQuery, AdminListPage } from '@labrute/core';
import React, {
  lazy, ReactNode, Suspense, useEffect, useMemo, useState,
} from 'react';
import { useAlert } from '../../hooks/useAlert';
import { catchError } from '../../utils/catchError';

const defaultPageSize = 20;
const autoRowHeight = () => 'auto' as const;

type ColumnKind = 'text' | 'id' | 'number' | 'date' | 'select';
type GridColumn<Row extends GridValidRowModel> = GridColDef<Row> & { kind: ColumnKind };

const loadDataGrid = async () => {
  const {
    DataGrid: MuiGrid, getGridStringOperators,
  } = await import('@mui/x-data-grid');

  const idOperators = getGridStringOperators().filter(({ value }) => (
    ['equals', 'doesNotEqual', 'isEmpty', 'isNotEmpty', 'isAnyOf'].includes(value)
  ));

  const Grid = <Row extends GridValidRowModel>({
    columns, ...props
  }: Omit<DataGridProps<Row>, 'columns'> & { columns: GridColumn<Row>[] }) => {
    const definitions = useMemo<GridColDef<Row>[]>(() => columns.map(({ kind, ...column }) => ({
      ...column,
      filterOperators: props.filterMode === 'server' && kind === 'id' ? idOperators : undefined,
    })), [columns, props.filterMode]);

    return <MuiGrid {...props} columns={definitions} />;
  };

  return { default: Grid };
};

const DataGrid = lazy(loadDataGrid) as Awaited<ReturnType<typeof loadDataGrid>>['default'];

const filterValue = (value: unknown) => {
  if (value instanceof Date && Number.isFinite(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === 'string' || (typeof value === 'number' && Number.isFinite(value))) {
    return String(value).trim();
  }

  return '';
};

const toGridQuery = (filterModel: GridFilterModel, sortModel: GridSortModel): AdminGridQuery => {
  const item = filterModel.items[0];
  const order = sortModel[0];
  let filter: AdminGridQuery['filter'];

  if (item) {
    const { field, operator } = item;

    if (operator === 'isEmpty' || operator === 'isNotEmpty') {
      filter = {
        field,
        operator,
      };
    } else if (operator === 'isAnyOf' && Array.isArray(item.value)) {
      const values = item.value.map(filterValue).filter(Boolean);

      if (values.length) {
        filter = {
          field,
          operator,
          value: values,
        };
      }
    } else {
      const value = filterValue(item.value);

      if (value) {
        filter = {
          field,
          operator,
          value,
        };
      }
    }
  }

  return {
    filter,
    sort: order?.sort ? {
      field: order.field,
      direction: order.sort,
    } : undefined,
  };
};

export const useAdminGridModels = (resetPage: () => void) => {
  const [filter, setFilter] = useState<GridFilterModel>({ items: [] });
  const [sort, setSort] = useState<GridSortModel>([]);
  const key = JSON.stringify(toGridQuery(filter, sort));
  const query = useMemo(() => JSON.parse(key) as AdminGridQuery, [key]);

  return {
    query,
    filterModel: filter,
    sortModel: sort,
    onFilterModelChange: (next: GridFilterModel) => {
      setFilter(next);

      if (JSON.stringify(toGridQuery(next, sort)) !== key) {
        resetPage();
      }
    },
    onSortModelChange: (next: GridSortModel) => {
      setSort(next);

      if (JSON.stringify(toGridQuery(filter, next)) !== key) {
        resetPage();
      }
    },
  };
};

type GridPaging = {
  page: number;
  pageSize?: number;
  onPageChange: (page: number) => void;
  hasNext?: boolean;
};

type AdminGridProps<Row extends GridValidRowModel> = {
  label: string;
  columns: {
    field: string;
    heading: string;
    kind?: ColumnKind;
    value?: (row: Row) => string | number | Date | null;
    valueOptions?: string[];
    sortable?: boolean;
    filterable?: boolean;
    render: (row: Row, params: GridRenderCellParams<Row>) => ReactNode;
    align?: 'left' | 'right';
    minWidth?: number;
  }[];
  rows: Row[];
  rowKey?: (row: Row) => string;
  emptyMessage?: string;
  busy?: boolean;
  paging?: GridPaging;
  onOpen?: (row: Row) => void;
  models?: ReturnType<typeof useAdminGridModels>;
};

export const AdminGrid = <Row extends GridValidRowModel>({
  label, columns, rows, rowKey, emptyMessage = 'No matching rows.', busy, paging, onOpen, models,
}: AdminGridProps<Row>) => {
  const gridColumns = useMemo<GridColumn<Row>[]>(() => columns.map((column) => ({
    field: column.field,
    kind: column.kind ?? 'text',
    type: ({
      text: 'string',
      id: 'string',
      number: 'number',
      date: 'date',
      select: 'singleSelect',
    } as const)[column.kind ?? 'text'],
    valueOptions: column.valueOptions,
    sortable: column.sortable,
    filterable: column.filterable,
    valueGetter: (value, row) => {
      const cell = column.value ? column.value(row) : value;

      if (column.kind === 'date' && cell && !(cell instanceof Date)) {
        // These columns display a UTC calendar day. Give the grid the same day in local time.
        return new Date(`${String(cell).slice(0, 10)}T00:00:00`);
      }

      return cell;
    },
    headerName: column.heading,
    minWidth: column.minWidth ?? 112,
    flex: column.align === 'right' ? 0.6 : 1,
    align: column.align,
    headerAlign: column.align,
    renderCell: (params) => column.render(params.row, params),
  })), [columns]);

  const pageSize = paging?.pageSize ?? defaultPageSize;

  const paginationMeta = useMemo(() => ({
    hasNextPage: paging?.hasNext ?? false,
  }), [paging?.hasNext]);

  const serverPagination = paging?.hasNext !== undefined;
  let rowCount: number | undefined;

  if (serverPagination) {
    // The server provides a continuation flag. The total is known on the last page.
    rowCount = paging.hasNext || busy ? -1 : paging.page * pageSize + rows.length;
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: 225,
      minWidth: 0,
    }}>
      <Suspense fallback={<CircularProgress size={24} aria-label="Loading data grid" />}>
        <DataGrid<Row>
          aria-label={label}
          rows={rows}
          columns={gridColumns}
          getRowId={rowKey}
          getRowHeight={autoRowHeight}
          getEstimatedRowHeight={() => 44}
          columnHeaderHeight={44}
          loading={busy}
          filterMode={models ? 'server' : 'client'}
          sortingMode={models ? 'server' : 'client'}
          filterModel={models?.filterModel}
          sortModel={models?.sortModel}
          onFilterModelChange={models?.onFilterModelChange}
          onSortModelChange={models?.onSortModelChange}
          disableRowSelectionOnClick
          rowSelection={false}
          pageSizeOptions={[pageSize]}
          paginationModel={paging ? {
            page: paging.page,
            pageSize,
          } : undefined}
          onPaginationModelChange={paging ? (model) => paging.onPageChange(model.page) : undefined}
          paginationMode={serverPagination ? 'server' : 'client'}
          rowCount={rowCount}
          paginationMeta={serverPagination ? paginationMeta : undefined}
          initialState={{
            pagination: {
              paginationModel: {
                page: 0,
                pageSize,
              },
            },
          }}
          localeText={{ noRowsLabel: emptyMessage }}
          onRowClick={onOpen ? ({ row }) => onOpen(row) : undefined}
          sx={{
            '& .MuiDataGrid-cell': {
              display: 'flex',
              alignItems: 'center',
              lineHeight: 1.4,
              minHeight: 44,
              py: 0.75,
              overflowWrap: 'anywhere',
              whiteSpace: 'normal',
            },
            '& .MuiDataGrid-cell--textRight': { justifyContent: 'flex-end' },
            '& .MuiDataGrid-row': { cursor: onOpen ? 'pointer' : 'default' },
          }}
        />
      </Suspense>
    </Box>
  );
};

export const ServerAdminGrid = <Row extends GridValidRowModel>({
  load, refresh = 0, ...grid
}: Omit<AdminGridProps<Row>, 'rows' | 'busy' | 'paging'> & {
  load: (page: number, query: AdminGridQuery) => Promise<AdminListPage<Row>>;
  refresh?: number;
}) => {
  const alert = useAlert();
  const [page, setPage] = useState(0);
  const models = useAdminGridModels(() => setPage(0));
  const { query } = models;
  const [result, setResult] = useState<AdminListPage<Row> | null>(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    let active = true;

    setLoading(true);
    setFailed(false);
    load(page, query).then((data) => {
      if (!active) {
        return;
      }

      // Deleting the only row on the last page can leave that page empty.
      if (!data.rows.length && page > 0) {
        setPage(page - 1);

        return;
      }

      setResult(data);
      setLoading(false);
    }).catch((error) => {
      if (active) {
        setFailed(true);
        setLoading(false);
        catchError(alert, error);
      }
    });

    return () => {
      active = false;
    };
  }, [alert, load, page, query, refresh, retry]);

  return (
    <Stack spacing={2}>
      {failed && (
        <Alert severity="error" action={(
          <Button onClick={() => setRetry((current) => current + 1)}>Retry</Button>
        )}>
          Could not load {grid.label.toLowerCase()}.
        </Alert>
      )}
      <AdminGrid
        {...grid}
        models={models}
        rows={loading || failed ? [] : result?.rows ?? []}
        emptyMessage={failed ? 'Results unavailable.' : grid.emptyMessage}
        busy={loading}
        paging={{
          page,
          hasNext: result?.hasNext ?? false,
          onPageChange: (nextPage) => {
            if (!loading) {
              setPage(nextPage);
            }
          },
        }}
      />
    </Stack>
  );
};
