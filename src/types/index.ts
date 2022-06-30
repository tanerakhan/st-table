type String = string

export interface IType {
    key: String,
    value: String
}

export interface IBody {
    id: IType,
    name: IType,
    color: IType,
    category: IType,
    price: IType
}