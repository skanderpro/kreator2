<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Apartment;
use App\Http\Resources\ApartmentResource;

class ApartmentController extends Controller
{
    public function index()
    {
        $apartments = Apartment::query()->orderBy('created_at', 'DESC')->paginate();

        return ApartmentResource::collection($apartments);
    }

    public function minMaxPrice()
    {
        $minPrice = Apartment::min('price');
        $maxPrice = Apartment::max('price');

        return response()->json(['min' => $minPrice, 'max' => $maxPrice]);
    }

    public function minMaxArea()
    {
        $minArea = Apartment::min('area');
        $maxArea = Apartment::max('area');

        return response()->json(['min' => $minArea, 'max' => $maxArea]);
    }
}
