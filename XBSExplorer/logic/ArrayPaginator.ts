class ArrayPaginator {
    paginate(data: any[], page: number, limit: number) : any[] {
        if ((!page || page == 0) && (!limit || limit == 0)) {
            return data;
        }

        // Todo: handle more invalid cases
        let start = page * limit;
        let end = start + limit;
        return data.splice(start, end);
    }
}

export = ArrayPaginator;