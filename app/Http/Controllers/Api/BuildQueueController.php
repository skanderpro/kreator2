<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BuildQueueResource;
use App\Models\BuildQueue;
use Illuminate\Http\Request;
use App\Models\BuildStep;
use App\Http\Resources\BuildStepResource;

class BuildQueueController extends Controller
{
    public function index()
    {
        $buildQueues = BuildQueue::query()->get();

        return BuildQueueResource::collection($buildQueues);
    }
}
