import { TileMenu } from './TileMenu';
import { DadosUser } from './DadosUser';

export class DadosMenu implements DadosUser
{
    NomeSistema: String;
    Versao: String;
    UrlFoto: String;
    dadosArvore:TileMenu[]
}