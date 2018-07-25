import { Component, OnInit } from '@angular/core';
import {Produit}  from '../shared/produit';
import { ProduitServiceService } from '../produit-service.service';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
produits=[];

  constructor(private ProduitServiceService:ProduitServiceService) {

this.ProduitServiceService=ProduitServiceService;
this.produits=this.ProduitServiceService.getProduits();
  }

  ngOnInit() {

  }
onSubmit(){

}

}
