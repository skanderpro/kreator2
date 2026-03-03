<?php

namespace Database\Seeders;

use App\Models\BuildStep;
use App\Models\Feature;
use App\Models\GalleryItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BuildStepSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $items = [
            [
                'title' => 'Січень 2026',
            ],
            [
                'title' => 'Грудень 2025',
            ],
            [
                'title' => 'Листопад 2026',
            ],
            [
                'title' => 'Листопад 2026',
            ],
        ];

        $image = 'swiper-construction-1.jpg';

        copy(resource_path('frontend/src/assets/img/swiper-construction/' . $image), public_path('storage/' . $image));
        foreach ($items as $item) {

            BuildStep::create([
                'image' => '/' . $image,
                'title' => $item['title'],
            ]);
        }
    }
}
