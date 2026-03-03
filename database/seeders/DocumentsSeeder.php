<?php

namespace Database\Seeders;

use App\Models\Document;
use App\Models\Feature;
use App\Models\GalleryItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DocumentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $items = [
            [
                'image' => 'advantages-1.jpg',
                'title' => 'Дозвіл на виконання будівельних робіт',
            ],
            [
                'image' => 'advantages-2.jpg',
                'title' => 'Ліцензія на ведення господарської діяльності з будівництва об\'єктів, що за класом наслідків (відповідальності) належать до об\'єктів з середніми та значними наслідками',
            ],
        ];

        Document::query()->delete();

        foreach ($items as $item) {
            copy(resource_path('frontend/src/assets/img/advantages/' . $item['image']), public_path('storage/' . $item['image']));

            Document::create([
                'image' => '/' . $item['image'],
                'title' => $item['title'],
            ]);
        }
    }
}
