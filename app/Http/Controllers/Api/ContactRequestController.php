<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactRequest;
use Backpack\Settings\app\Models\Setting;
use Illuminate\Http\Request;
use App\Models\News;
use App\Http\Resources\NewsResource;

class ContactRequestController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'message' => 'nullable|string',
        ]);

        ContactRequest::create($validatedData);

        return response()->json(['message' => 'Request sent successfully']);
    }
}
