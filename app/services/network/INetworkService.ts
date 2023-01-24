export default interface INetworkService {
    get<T>(path: string, config?: RequestInit): Promise<T>;
    post<T, U>(path: string, body: T, config?: RequestInit): Promise<U>;
    put<T, U>(path: string, body: T, config?: RequestInit): Promise<T>;
}
