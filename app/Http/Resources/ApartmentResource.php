<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ApartmentResource extends JsonResource
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
            'area' => $this->area,
            'living_area' => $this->living_area,
            'parking_count' => $this->parking_count,
            'rooms' => $this->rooms,
            'building' => $this->building,
            'section' => $this->section,
            'type' => $this->type,
            'floor' => $this->floor,
            'price' => $this->price,
            'price_for_meter' => $this->price_for_meter,
            'plan' =>  !empty($this->plan) ? Storage::url($this->plan) : null,
            'floor_plan' => !empty($this->floor_plan) ? Storage::url($this->floor_plan) : null,
            'gen_plan' => !empty($this->gen_plan) ? Storage::url($this->gen_plan) : null,
            'created_at' => $this->created_at,
        ];
    }
}
