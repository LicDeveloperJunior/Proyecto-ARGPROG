export interface IPropiedadesTema{
  colorPrimario: string;
  textoPrimario: string;
  tamanioTextoPorDefecto: string;
}

export interface ITema {
  default: IPropiedadesTema;
  dark?: IPropiedadesTema;
}
