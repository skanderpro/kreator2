<?php

namespace Database\Seeders;

use App\Models\GalleryItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $items = [
            'swiper-news-1.jpg',
            'swiper-news-1.jpg',
            'swiper-news-1.jpg',
            'swiper-news-1.jpg',
        ];

        GalleryItem::query()->delete();

        copy(resource_path('frontend/src/assets/img/swiper-news/' . $items[0]), public_path('storage/' . $items[0]));

        foreach ($items as $item) {


            GalleryItem::create([
                'image' => '/' . $item,
            ]);
        }
    }
}
