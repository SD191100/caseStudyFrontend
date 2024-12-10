import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured',
  imports: [CommonModule],
  templateUrl: './featured.component.html',
})
export class FeaturedComponent implements OnInit {
  featuredProducts: any[] = [];
  loading: boolean = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getFeaturedProducts().subscribe({
      next: (products: any) => {
        this.featuredProducts = products;
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Error fetching featured products:', err);
        this.loading = false;
      }
    });
  }
}