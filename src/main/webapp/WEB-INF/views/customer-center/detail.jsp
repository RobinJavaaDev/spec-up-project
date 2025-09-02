<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <title>${post.title} - 고객센터</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/customer-center/style.css">
</head>
<body>
<%@ include file="/WEB-INF/views/common/header.jsp" %>

<div class="container">
    <h1>게시글 상세</h1>
    
    <!-- 메시지 표시 -->
    <c:if test="${not empty message}">
        <div class="alert alert-success">${message}</div>
    </c:if>
    <c:if test="${not empty error}">
        <div class="alert alert-error">${error}</div>
    </c:if>
    
    <div class="post-detail">
        <div class="post-header">
            <h2>
                <c:if test="${post.isNotice}">[공지] </c:if>
                ${post.title}
            </h2>
            <div class="post-info">
                <span>작성자: ${post.writer.username}</span>
                <span>작성일: ${post.createdAt}</span>
            </div>
        </div>
        
        <div class="post-content">
            ${post.content}
        </div>
        
        <div class="post-actions">
            <a href="${pageContext.request.contextPath}/customer-center" class="btn-secondary">목록으로</a>
            
            <c:if test="${isOwner || isAdmin}">
                <a href="${pageContext.request.contextPath}/customer-center/post/${post.postId}/edit" class="btn-primary">수정</a>
                <form method="post" action="${pageContext.request.contextPath}/customer-center/post/${post.postId}/delete" style="display:inline;">
                    <button type="submit" class="btn-delete" onclick="return confirm('정말 삭제하시겠습니까?')">삭제</button>
                </form>
            </c:if>
        </div>
    </div>
</div>

<%@ include file="/WEB-INF/views/common/footer.jsp" %>
</body>
</html>
