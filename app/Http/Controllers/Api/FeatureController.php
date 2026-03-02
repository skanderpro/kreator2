<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\FeatureResource;
use App\Models\Feature;

class FeatureController extends Controller
{
    public function index()
    {
        $features = Feature::query()->orderBy('created_at', 'DESC')->paginate();

        return FeatureResource::collection($features);
    }
}
