package com.sougu.pw.common.aop.annotation;

import java.lang.annotation.*;

/**
 * LogAnnotation
 *
 * @author Prescott.Wen
 * @version V1.0
 * @date 2021年7月18日
 */
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface LogAnnotation {
    /**
     * 模块
     */
    String title() default "";

    /**
     * 功能
     */
    String action() default "";
}
