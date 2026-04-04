<?php

namespace Database\Seeders;

use App\Models\ContentPage;
use App\Models\Feature;
use App\Models\GalleryItem;
use App\Models\News;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContentPagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $items = [
            [
                'title' => 'Політика конфіденційності',
                'slug' => 'privacy-policy',
                'content' => <<<CONTENT
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
CONTENT,
            ],
        ];

        ContentPage::query()->delete();

        foreach ($items as $item) {
            ContentPage::create($item);
        }
    }
}
