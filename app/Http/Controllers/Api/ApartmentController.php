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

        if (!empty($request->input('type'))) {
            $type = $request->input('type');
            $type = !is_array($type) ? [$type] : $type;

            $apartments->whereIn('type', $type);
        }

        if (!empty($request->input('rooms'))) {
            $rooms = $request->input('rooms');
            $rooms = !is_array($rooms) ? [$rooms] : $rooms;

            $apartments->whereIn('rooms', $rooms);
        }

        if (!empty($request->input('areaFrom'))) {
            $apartments->where('area', '>=', $request->input('areaFrom'));
        }

        if (!empty($request->input('areaTo'))) {
            $apartments->where('area', '<=', $request->input('areaTo'));
        }

        if (!empty($request->input('priceFrom'))) {
            $apartments->where('price', '>=', $request->input('priceFrom'));
        }

        if (!empty($request->input('priceTo'))) {
            $apartments->where('price', '<=', $request->input('priceTo'));
        }

        if (!is_null($request->input('sold', null))) {
            $apartments->where('sold', $request->input('sold'));
        }

        if (!empty($request->input('features'))) {
            $features = $request->input('features');
            $features = !is_array($features) ? [$features] : $features;

            $apartments->whereJsonContains('features', $features);
        }

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

    public function getMeta()
    {
        $minPrice = Apartment::query()->where('type', 'apartment')->min('price_for_meter');
        $maxPrice = Apartment::query()->where('type', 'apartment')->max('price_for_meter');
        $minArea = Apartment::query()->where('type', 'apartment')->min('area');
        $maxArea = Apartment::query()->where('type', 'apartment')->max('area');
        $buildings = Apartment::query()->select('building')->groupBy('building')->orderBy('building', 'asc')->get()->pluck('building');
        $sections = Apartment::query()->select('section')->groupBy('section')->orderBy('section', 'asc')->get()->pluck('section');
        $rooms = Apartment::query()->select('rooms')->where('rooms', '>', 0)->groupBy('rooms')->orderBy('rooms', 'asc')->get()->pluck('rooms');
        $parking_count = Apartment::query()->select('parking_count')->groupBy('parking_count')->orderBy('parking_count', 'asc')->get()->pluck('parking_count');

        return response()->json([
            'price' => [
                'min' => $minPrice,
                'max' => $maxPrice,
            ],
            'area' => [
                'min' => $minArea,
                'max' => $maxArea,
            ],
            'rooms' => $rooms,
            'buildings' => $buildings,
            'sections' => $sections,
            'parking_count' => $parking_count,
        ]);
    }

    public function unsoldCount()
    {
        $count = Apartment::query()->count();

        return response()->json(['count' => $count]);
    }
}
