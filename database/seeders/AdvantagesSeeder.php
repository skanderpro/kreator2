<?php

namespace Database\Seeders;

use App\Models\Feature;
use App\Models\GalleryItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdvantagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $items = [
            [
                'image' => 'advantages-1.jpg',
                'title' => 'Дитячий та спортивний майданчики з м’яким безпечним покриттям',
            ],
            [
                'image' => 'advantages-2.jpg',
                'title' => 'Краєвид з вікон на Тернопільський став',
            ],
            [
                'image' => 'advantages-3.jpg',
                'title' => 'Дворівневий підземно-наземний паркінг',
            ],
            [
                'image' => 'advantages-4.jpg',
                'title' => 'Засклені балкони та лоджії з панорамними вікнами',
            ],
            [
                'image' => 'advantages-5.jpg',
                'title' => 'Краєвид на парк імені Тараса Шевченка',
            ],
            [
                'image' => 'advantages-6.jpg',
                'title' => 'Стіни з ефективним зовнішнім утепленням',
            ],
        ];

        Feature::query()->delete();



        foreach ($items as $item) {
            copy(resource_path('frontend/src/assets/img/advantages/' . $item['image']), public_path('storage/' . $item['image']));

            Feature::create([
                'image' => '/' . $item['image'],
                'title' => $item['title'],
            ]);
        }
    }
}
