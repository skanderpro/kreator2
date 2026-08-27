<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BuildQueueResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'start_year' => $this->start_year,
            'end_year' => $this->end_year,
            'start_quarter' => $this->start_quarter,
            'end_quarter' => $this->end_quarter,
            'progress' => $this->progress,
            'created_at' => $this->created_at,
        ];
    }
}
