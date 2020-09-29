import { LinkMenu } from './LinkMenu';
import { DadosUser } from './DadosUser';

export class DadosMenu implements DadosUser
{
    NomeUsuario: String;
    Cargo: String;
    UrlFoto: String;
    ListaItensMenu:LinkMenu[];
}