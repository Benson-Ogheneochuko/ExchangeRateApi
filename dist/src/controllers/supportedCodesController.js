var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { supportedCodesService } from "../services/supportedCodesService.js";
import { asyncErrorHandler } from "../handleErrors/AppErrorHandlers.js";
export const supportedCodesController = asyncErrorHandler((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const codes = yield supportedCodesService();
    if (!codes) {
        return res.status(400).json({
            success: false, message: 'error fetching supported codes. try again later'
        });
    }
    res.status(200).json({
        success: true,
        message: 'request successful',
        data: codes
    });
}));
