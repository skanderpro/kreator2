<?php

namespace Database\Seeders;

use App\Models\GalleryItem;
use Backpack\Settings\app\Models\Setting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Setting::query()->delete();
        Setting::create([
            'key' => 'facebook_url',
            'name' => 'Facebook URL',
            'value' => '#',
            'field' => json_encode([
                'name'        => 'value',
                'label'       => "Facebook URL",
                'type'        => 'text',
            ]),
            'active' => 1,
        ]);
        Setting::create([
            'key' => 'instagram_url',
            'name' => 'Instagram URL',
            'value' => '#',
            'field' => json_encode([
                'name'        => 'value',
                'label'       => "Instagram URL",
                'type'        => 'text',
            ]),
            'active' => 1,
        ]);
        Setting::create([
            'key' => 'email',
            'name' => 'Email',
            'value' => 'kreatorbudternopil@gmail.com',
            'field' => json_encode([
                'name'        => 'value',
                'label'       => "Email",
                'type'        => 'text',
            ]),
            'active' => 1,
        ]);
        Setting::create([
            'key' => 'phone',
            'name' => 'Phone',
            'value' => '+38(067)-170-87-42',
            'field' => json_encode([
                'name'        => 'value',
                'label'       => "Phone",
                'type'        => 'text',
            ]),
            'active' => 1,
        ]);
        Setting::create([
            'key' => 'address_sell_department',
            'name' => 'Address sell department',
            'value' => 'вул. Листопадова, 1/3',
            'field' => json_encode([
                'name'        => 'value',
                'label'       => "Address sell department",
                'type'        => 'text',
            ]),
            'active' => 1,
        ]);
        Setting::create([
            'key' => 'address_building',
            'name' => 'Address building',
            'value' => 'ул. Білецька, 30',
            'field' => json_encode([
                'name'        => 'value',
                'label'       => "Address building",
                'type'        => 'text',
            ]),
            'active' => 1,
        ]);
        Setting::create([
            'key' => 'map_lat',
            'name' => 'Map latitude',
            'value' => '49.554967501134946',
            'field' => json_encode([
                'name'        => 'value',
                'label'       => "Map latitude",
                'type'        => 'text',
            ]),
            'active' => 1,
        ]);
        Setting::create([
            'key' => 'map_lng',
            'name' => 'Map longitude',
            'value' => '25.588667591023178',
            'field' => json_encode([
                'name'        => 'value',
                'label'       => "Map longitude",
                'type'        => 'text',
            ]),
            'active' => 1,
        ]);

    }
}
