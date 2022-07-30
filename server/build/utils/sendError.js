const sendError = (res, error) => {
    if (error instanceof Error) {
        res.status(500).send(error.message);
    }
    else {
        res.status(500).send(error);
    }
};
export default sendError;
//# sourceMappingURL=sendError.js.map