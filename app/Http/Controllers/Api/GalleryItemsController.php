<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\GalleryItem;
use App\Http\Resources\GalleryItemResource;

class GalleryItemsController extends Controller
{
    public function index()
    {
        $galleryItems = GalleryItem::query()->orderBy('created_at', 'DESC')->paginate();

        return GalleryItemResource::collection($galleryItems);
    }
}
