package com.sougu.pw.common.exception.code;

/**
 * ResponseCodeInterface
 *
 * @author Prescott.Wen
 * @version V1.0
 * @date 2021年7月18日
 */
public interface ResponseCodeInterface {
    /**
     * 获取code
     *
     * @return code
     */
    int getCode();

    /**
     * 获取信息
     *
     * @return msg
     */
    String getMsg();
}
