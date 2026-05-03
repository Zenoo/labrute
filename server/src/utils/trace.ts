import {
  trace, Span, SpanStatusCode,
} from '@opentelemetry/api';

const tracer = trace.getTracer('labrute-queries');

/**
 * Wraps an async operation in a custom OpenTelemetry span for better tracing visibility
 * @param spanName - The name that will appear in your OpenTelemetry dashboard
 * @param callback - The async function to execute within the span
 * @param attributes - Optional custom attributes to add to the span
 * @returns The result of the callback
 *
 * @example
 * ```typescript
 * const user = await traced('getUserWithBrutes', async () => {
 *   return prisma.user.findUnique({
 *     where: { id: userId },
 *     include: { brutes: true }
 *   });
 * });
 * ```
 */
export const traced = <T>(
  spanName: string,
  callback: () => Promise<T>,
  attributes?: Record<string, string | number | boolean>,
) => tracer.startActiveSpan(spanName, async (span: Span) => {
  try {
    // Add any custom attributes
    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        span.setAttribute(key, value);
      });
    }

    const result = await callback();

    span.setStatus({ code: SpanStatusCode.OK });
    return result;
  } catch (error) {
    // Record the exception and mark span as error
    if (error instanceof Error) {
      span.recordException(error);
    }
    span.setStatus({
      code: SpanStatusCode.ERROR,
      message: error instanceof Error ? error.message : 'Unknown error',
    });
    throw error;
  } finally {
    span.end();
  }
});

/**
 * Adds attributes to the current active span if one exists
 * Useful for adding context to auto-instrumented Prisma queries
 */
export const addSpanAttributes = (attributes: Record<string, string | number | boolean>) => {
  const activeSpan = trace.getActiveSpan();
  if (activeSpan) {
    Object.entries(attributes).forEach(([key, value]) => {
      activeSpan.setAttribute(key, value);
    });
  }
};

/**
 * Gets the current active span for advanced usage
 */
export const getActiveSpan = () => trace.getActiveSpan();
