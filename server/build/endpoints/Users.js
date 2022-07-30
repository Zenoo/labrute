import DB from '../db/client.js';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';
const Users = {
    list: async (req, res) => {
        try {
            const client = await DB.connect();
            await auth(client, req);
            const result = await client.query('select * from users');
            const { rows } = result;
            await client.end();
            res.status(200).send(rows);
        }
        catch (error) {
            sendError(res, error);
        }
    },
    authenticate: async (req, res) => {
        try {
            const client = await DB.connect();
            const user = await auth(client, req);
            await client.end();
            res.status(200).send(user);
        }
        catch (error) {
            console.log(error);
            sendError(res, error);
        }
    },
};
export default Users;
//# sourceMappingURL=Users.js.map