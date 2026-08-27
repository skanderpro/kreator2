<?php

namespace Database\Seeders;

use App\Models\BuildQueue;
use App\Models\BuildStep;
use App\Models\Feature;
use App\Models\GalleryItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BuildQueueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $items = [
            [
                'title' => 'Черга 1',
                'start_quarter' => 1,
                'end_quarter' => 4,
                'start_year' => 2026,
                'end_year' => 2026,
                'progress' => 75,
            ],
        ];

        BuildQueue::query()->delete();

        foreach ($items as $item) {
            BuildQueue::create($item);
        }
    }
}
