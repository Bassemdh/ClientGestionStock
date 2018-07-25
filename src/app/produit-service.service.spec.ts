import { TestBed, inject } from '@angular/core/testing';

import { ProduitServiceService } from './produit-service.service';

describe('ProduitServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProduitServiceService]
    });
  });

  it('should be created', inject([ProduitServiceService], (service: ProduitServiceService) => {
    expect(service).toBeTruthy();
  }));
});
