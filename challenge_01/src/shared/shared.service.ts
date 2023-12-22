import { Injectable } from '@nestjs/common';
import * as crypto from "crypto";
@Injectable()
export class SharedService {

    getHashData(data: String): String {
        return crypto.createHash('md5').update(data.toString()).digest("hex")
    }
}
