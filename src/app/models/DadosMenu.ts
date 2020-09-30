import { TileMenu } from './TileMenu';
import { DadosUser } from './DadosUser';

export class DadosMenu implements DadosUser
{
    NomeUsuario: String;
    Cargo: String;
    UrlFoto: String;
    dadosArvore:TileMenu[]
}