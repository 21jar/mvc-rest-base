<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<c:set var="ctxStatic" value="/static"/>
<%--<c:set var="ctxStatic" value="${pageContext.request.contextPath}/static"/>--%>

<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport"
          content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/>
    <meta content="telephone=no" name="format-detection"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <link rel="stylesheet" href="${ctxStatic}/lib/reset-app.css"/>
    <link rel="stylesheet" href="${ctxStatic}/css/list.css"/>
    <script type="text/javascript" src="${ctxStatic}/lib/scree.js"></script>

    <title>信息</title>
</head>
<body>
<section id="app">
    <div class="title"></div>
    <div class="main">
        <ul>
            <c:forEach items="${list}" var="warn">
                <li class="item">
                    <div class="top-text">${warn.entName}</div>
                    <div class="sub">
                        <div>${warn.title}</div>
                        <div class="date">${warn.date}</div>
                    </div>
                    <div class="center">
                        <c:forEach items="${warn.content}" var="m">
                            <p>
                                <span>${m.key}:</span>
                                <span>${m.value}</span>
                            </p>
                        </c:forEach>
                    </div>
                </li>
            </c:forEach>
        </ul>
    </div>
</section>
<script type="text/javascript">
    new ChangeView().start()
</script>
</body>
</html>
