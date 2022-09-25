export interface IPropiedadesTema{
  colorFuerte: string;
  colorDebil: string;
  textoPrimario: string;
  tamanioTextoPorDefecto: string;
}

export interface ITema {
  default: IPropiedadesTema;
  dark?: IPropiedadesTema;
}
