export const BuildUrl = (baseUrl, route, query) => {
    const url = new URL(baseUrl);
    url.pathname += route;
    Object.keys(query).forEach(key => url.searchParams.append(key, query[key]))
    return url.toString();
}