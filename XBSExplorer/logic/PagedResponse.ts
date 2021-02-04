class PagedResponse {
    data: any[];
    page: number;
    limit: number;

    constructor(data: any[], page: number, limit: number) {
        this.data = data;
        this.page = page;
        this.limit = limit;
    }
}

export = PagedResponse;