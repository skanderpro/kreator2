<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\DocumentResource;
use App\Models\Document;

class DocumentController extends Controller
{
    public function index()
    {
        $documents = Document::query()->orderBy('created_at', 'DESC')->paginate();

        return DocumentResource::collection($documents);
    }
}
