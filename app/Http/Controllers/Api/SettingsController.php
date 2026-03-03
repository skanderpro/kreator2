<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Backpack\Settings\app\Models\Setting;
use Illuminate\Http\Request;
use App\Models\News;
use App\Http\Resources\NewsResource;

class SettingsController extends Controller
{
    public function index()
    {
        $settings = Setting::query()->where('active', 1)->get();

        $data = [];

        foreach ($settings as $setting) {
            $data[$setting->key] = $setting->value;
        }

        return $data;
    }
}
