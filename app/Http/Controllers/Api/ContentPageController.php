<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContentPage;
use App\Http\Resources\ContentPageResource;

class ContentPageController extends Controller
{
    public function show(ContentPage $page)
    {
        return ContentPageResource::make($page);
    }
}
