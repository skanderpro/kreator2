<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            GallerySeeder::class,
            AdvantagesSeeder::class,
            BuildStepSeeder::class,
            NewsSeeder::class,
            DocumentsSeeder::class,
            ApartmentSeeder::class,
            SettingsSeeder::class,
        ]);
    }
}
