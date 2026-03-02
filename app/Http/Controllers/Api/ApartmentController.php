<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Apartment;
use App\Http\Resources\ApartmentResource;

class ApartmentController extends Controller
{
    public function index(Request $request)
    {
        $apartments = Apartment::query();

        switch ($request->input('order')) {
            case 'price_desc':
                $apartments->orderBy('price', 'desc');
                break;
            case 'area_asc':
                $apartments->orderBy('area', 'asc');
                break;
            case 'area_desc':
                $apartments->orderBy('area', 'desc');
                break;
            default:
                $apartments->orderBy('price', 'asc');
                break;
        }

        return ApartmentResource::collection($apartments->paginate());
    }

    public function show(Apartment $apartment)
    {
        return ApartmentResource::make($apartment);
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

    public function unsoldCount()
    {
        $count = Apartment::query()->count();

        return response()->json(['count' => $count]);
    }
}
