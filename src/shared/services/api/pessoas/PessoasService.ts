import { Eviroment } from "../../../environment";
import { Api } from "../axios-config";

interface IListagemPessoa {
    id: number;
    email: string;
    cidadeId: number;
    nomeCompleto: string;
}
interface IDetalhePessoa {
    id: number;
    email: string;
    cidadeId: number;
    nomeCompleto: string;
}

type IPessoasComTotalCount = {
    data: IListagemPessoa[];
    totalCount: number;
}

const getAll = async (page = 1, filter = ''): Promise<IPessoasComTotalCount | Error> => {
    try {
        const urlRelative = `/pessoas?_page=${page}&_limit=${Eviroment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`

        const { data, headers } = await Api.get(urlRelative);

        if (data) {
            return {
                data,
                totalCount: Number(headers['x-total-count'] || Eviroment.LIMITE_DE_LINHAS),
            };
        }
        return new Error('Erro ao listar os registros.');

    } catch (error) {
        console.error(error);

        return new Error((error as {message: string}).message || 'Erro ao listar os registros.');

    }
};

const getById = async (): Promise<any> => { };

const create = async (): Promise<any> => { };

const updateById = async (): Promise<any> => { };

const deleteById = async (): Promise<any> => { };

export const PessoasService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
};