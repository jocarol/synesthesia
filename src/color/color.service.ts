import { Injectable } from '@nestjs/common';

@Injectable()
export class ColorService {
    getColor() {
        return '#ffffff'
    }
}
