const auth = async (client, request) => {
    const { headers: { authorization } } = request;
    if (!authorization) {
        throw new Error('No authorization header');
    }
    if (typeof authorization !== 'string') {
        throw new Error('Invalid authorization header');
    }
    const [id, token] = Buffer.from(authorization.split(' ')[1], 'base64')
        .toString().split(':');
    const userQuery = await client.query('select * from users where id = $1 and token = $2::text', [id, token]);
    if (!userQuery.rows || userQuery.rows.length === 0) {
        throw new Error('Invalid user');
    }
    const user = userQuery.rows[0];
    // Fetch brutes for user
    const brutes = await client.query(`SELECT
          id,
          data->>'name' as name,
          data->>'gender' as gender
        FROM brutes WHERE data ->> 'user' = $1`, [user.id]);
    return {
        ...user,
        brutes: brutes.rows.map((brute) => ({
            id: brute.id,
            data: {
                name: brute.name,
                gender: brute.gender,
            },
        })),
    };
};
export default auth;
//# sourceMappingURL=auth.js.map