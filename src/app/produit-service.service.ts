import { Injectable } from '@angular/core';
import {Produit}  from './shared/produit';
@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
private  produits:Produit []=[];
private p1;
  constructor() {
this.p1=new Produit();
this.produits.push(this.p1);
  }
  public getProduits(){

  return this.produits;
  }
}
