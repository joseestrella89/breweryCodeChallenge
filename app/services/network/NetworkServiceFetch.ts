import INetworkService from '@Services/network/INetworkService';

export default class NetworkServiceFetch implements INetworkService {
    async request<T>(path: string, config?: RequestInit): Promise<T> {
        const request = new Request(path, config)
        const response = await fetch(request)

        if(!response.ok) {
            throw new Error(response.statusText)
        }
        
        return response.json().catch(() => ({}))
    }

    get<T>(path: string, config?: RequestInit): Promise<T> {
        const init = {method: 'get', ...config}
        return this.request<T>(path, init)
    }

    post<T, U>(path: string, body: T, config?: RequestInit): Promise<U> {
        const init = {method: 'post', body: JSON.stringify(body), ...config}
        return this.request<U>(path, init)
    }

    put<T, U>(path: string, body: T, config?: RequestInit): Promise<U> {
        const init = {method: 'put', body: JSON.stringify(body), ...config}
        return this.request<U>(path, init)
    }
}