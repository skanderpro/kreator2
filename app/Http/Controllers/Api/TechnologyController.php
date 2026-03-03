<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TechnologyResource;
use App\Models\Technology;
use Backpack\Settings\app\Models\Setting;
use Illuminate\Http\Request;
use App\Models\News;
use App\Http\Resources\NewsResource;

class TechnologyController extends Controller
{
    public function index()
    {
        $technologies = Technology::query()->orderBy('created_at', 'DESC')->paginate();

        return TechnologyResource::collection($technologies);
    }
}
