import path from 'path'
import type * as AWS from '@aws-sdk/client-s3'
import type { HandleDelete } from '../../types'

interface Args {
  s3: AWS.S3
  bucket: string
}

export const getHandleDelete = ({ s3, bucket }: Args): HandleDelete => {
  return async ({ filename, doc: { prefix = '' } }) => {
    await s3.deleteObject({
      Bucket: bucket,
      Key: path.posix.join(prefix, filename),
    })
  }
}
