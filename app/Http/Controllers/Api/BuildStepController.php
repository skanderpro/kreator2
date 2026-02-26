<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BuildStep;
use App\Http\Resources\BuildStepResource;

class BuildStepController extends Controller
{
    public function index()
    {
        $buildSteps = BuildStep::query()->orderBy('created_at', 'DESC')->paginate();

        return BuildStepResource::collection($buildSteps);
    }
}
