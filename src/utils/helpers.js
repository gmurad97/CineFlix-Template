export const ComposeUrl = (baseUrl, route, api_key, page = 1) => {
    const url = new URL(baseUrl);
    url.pathname += route;
    url.searchParams.append("api_key", api_key);
    url.searchParams.append("page", page)
    return url.toString();
}