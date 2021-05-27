from django.db import models

# Create your models here.
class Information(models.Model):
    name = models.CharField(max_length=20, null=True, blank=True)

    class Meta:
        db_table = 'global_information'

class Makeup(models.Model):
    builtin_id = models.IntegerField(null=True, blank=True)
    type = models.CharField(max_length=10, null=False, blank=False)
    makeup_name = models.CharField(max_length=255, null=False, blank=False)
    name = models.CharField(max_length=255, null=False, blank=False)
    sub_name = models.TextField(null=True, blank=True)
    class Meta:
        db_table = 'makeup'

"""
builtin_id           int          null,
    type                 varchar(10)  not null,
    makeup_name          varchar(255) null,
    name                 varchar(255) not null,
    sub_name             text         null,
    thumbnail            varchar(255) null,
    thumbnail_color      varchar(20)  null,
    version              bigint       not null,
    screen_capture_mode  bit          not null,
    download_type        varchar(255) not null,
    device_types         varchar(20)  null,
    min_ios_version      varchar(20)  null,
    max_ios_version      varchar(20)  null,
    min_android_version  varchar(20)  null,
    max_android_version  varchar(20)  null,
    newmark_end_date     datetime     null,
    designated_countries text         null,
    banned_countries     text         null,
    sale                 bit          not null,
    package_json         text         null,
    for_marketing        bit          null,
    orderz               int          null,
    updated              datetime     not null,
    created              datetime     not null,
    admin                varchar(20)  null
"""
