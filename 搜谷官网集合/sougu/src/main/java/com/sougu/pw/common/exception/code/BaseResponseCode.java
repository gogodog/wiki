package com.sougu.pw.common.exception.code;


/**
 * 错误码
 *
 * @author Prescott.Wen
 * @version V1.0
 * @date 2021年7月18日
 */
public enum BaseResponseCode implements ResponseCodeInterface {
    /**
     * 错误码
     */
    SUCCESS(0, "操作成功"),
    SYSTEM_BUSY(500001, "系统繁忙，请稍候再试"),
    OPERATION_ERRO(500002, "操作失败"),
    DATA_ERROR(401003, "传入数据异常"),
    METHOD_ARGUMENT_NOT_VALID_EXCEPTION(401007, "方法参数校验异常")
    ;

    /**
     * 错误码
     */
    private final int code;
    /**
     * 错误消息
     */
    private final String msg;

    BaseResponseCode(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    @Override
    public int getCode() {
        return code;
    }

    @Override
    public String getMsg() {
        return msg;
    }
}
