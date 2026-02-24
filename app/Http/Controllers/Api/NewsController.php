<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\News;
use App\Http\Resources\NewsResource;

class NewsController extends Controller
{
    public function index()
    {
        $news = News::query()->orderBy('created_at', 'DESC')->paginate();

        return NewsResource::collection($news);
    }
}
